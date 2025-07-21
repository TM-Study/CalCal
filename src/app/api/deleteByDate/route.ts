import { deleteByDate } from "@/app/utils/crudUtil";

export const POST = async (req: Request) => {
  
  const data = await req.json();
  const { date } = data;

  await deleteByDate('cal_info', date);
}