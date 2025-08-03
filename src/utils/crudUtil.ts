import { createClient } from '@/supabase/supabaseClient';
import { TableInfoType, TableNameType } from '../supabase/tableInfo';
import { User } from '@supabase/supabase-js';
import { getUser } from './authUtil';

/**
 * Supabaseに接続するクライアントインスタンス
 */
const supabase = createClient();

/**
 * selectAll
 * <p>
 * テーブル名を指定してすべてのレコードを返す
 * 
 * @param tableName テーブル名
 * @returns 検索結果
 */
export const selectAll = async <T>(tableName: TableNameType): Promise<T[]> => {

  // ユーザ情報の取得
  const user: User = await getUser();

  // データの取得
  const { data, error } = await supabase
    .from(tableName)
    .select()
    .eq('user_id', user.id);

  // ロギング
  console.log(`selectAll('${tableName}'):`, data);
  if (error) {
    throw new Error(`Failed to fetch data from ${tableName}: ${error.message}`);
  }

  return data as T[];
};

/**
 * insertInto
 * <p>
 * テーブル名、レコードを指定してレコードを挿入する
 * 
 * @param tableName テーブル名
 * @param tableInfo レコード
 * @returns 挿入結果
 */
export const insertInto = async <T>(tableName: TableNameType, tableInfo: TableInfoType): Promise<T[]> => {

  // ユーザ情報の取得
  const user: User = await getUser();

  // レコードにユーザIDを追加
  tableInfo.user_id = user.id;

  // データの挿入
  const { data, error } = await supabase
    .from(tableName)
    .insert([
      tableInfo,
    ])
    .select();

  // ロギング
  console.log(`insertInto('${tableName}'):`, data);
  if (error) {
    throw new Error(`Failed to insert data into ${tableName}: ${error.message}`);
  }

  return data as T[];
};

/**
 * deleteByDate
 * <p>
 * 日付を指定してレコードを削除する
 * 
 * @param tableName テーブル名
 * @param date 日付
 */
export const deleteByDate = async (tableName: TableNameType, date: string) => {

  // ユーザ情報の取得
  const user: User = await getUser();

  // データの削除
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq('date', date)
    .eq('user_id', user.id);

  // ロギング
  if (error) {
    throw new Error(`Failed to delete data from ${tableName}: ${error.message}`);
  }
};