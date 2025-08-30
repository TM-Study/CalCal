import { TableInfoType, TableNameType } from './supabase/tableInfo';
import { createClient } from './supabase/server';

/**
 * selectAll
 * <p>
 * テーブル名を指定してすべてのレコードを返す
 * 
 * @param tableName テーブル名
 * @returns 検索結果
 */
export const selectAll = async <T>(tableName: TableNameType): Promise<T[]> => {
  const supabase = await createClient();

  // データの取得
  const { data, error } = await supabase
    .from(tableName)
    .select();

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
  const supabase = await createClient();

  const user_id = (await supabase.auth.getUser()).data.user?.id;

  // データの挿入
  const { data, error } = await supabase
    .from(tableName)
    .insert([
      { ...tableInfo, user_id: user_id },
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
  const supabase = await createClient();

  // データの削除
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq('date', date);

  // ロギング
  if (error) {
    throw new Error(`Failed to delete data from ${tableName}: ${error.message}`);
  }
};