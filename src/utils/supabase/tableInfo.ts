/** Supabaseにおけるテーブル情報をまとめる */

/**
 * テーブル名タイプ
 */
export type TableNameType = 'cal_info';

/**
 * テーブル定義タイプ
 */
export type TableInfoType = CalInfoTableType;

/**
 * cal_infoテーブルのテーブル定義
 */
export interface CalInfoTableType {
  id?: number;
  created_at?: string;
  user_id?: string;
  date: string;
  item: string;
  cal: number;
};