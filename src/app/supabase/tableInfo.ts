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
  date: string;
  item: string;
  cal: number;
};