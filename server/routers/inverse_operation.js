import {round} from "lodash";
import Router from "@koa/router";
import multer from "@koa/multer";
import load_file from "@server/utils/load_file";

const router = new Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits:1024000 }).fields([{
  name:"file",maxCount:1
},{
  name:"工资收入",maxCount:1
},{
  name:"材料费用",maxCount:1
},{
  name:"制造费用",maxCount:1
},{
  name:"营业收入",maxCount:1
}]);

/**
 * @description 根据营业收入和工资合集的系数进行逆向运算
 * **/
router.post("/inverse_operation",upload,async (context) => {
  const {工资收入,材料费用,制造费用,营业收入}=context.request.body;
  const {buffer}=context.request.files.file[0];
  const {workbook,worksheet}=await load_file(buffer);
  const docs_col=worksheet.getColumn("B");
  /** 工资列 **/
  const gongzi_data_array=[];
  /** 材料列 **/
  const cailiao_data_array=[];
  /** 制造费用列 **/
  const zhizaofeiyong_data_array=[];
  docs_col.eachCell({ includeEmpty: false },({value}, rowNumber)=>{
    if(/(套)|(平方)/ig.test(value)){
      gongzi_data_array.push(`C${rowNumber}`);
      cailiao_data_array.push(`D${rowNumber}`);
      zhizaofeiyong_data_array.push(`E${rowNumber}`);
    };
  });
  const 工资比率=工资收入/营业收入;
  gongzi_data_array.forEach((current_cell_id)=>{
    const current_value=worksheet.getCell(current_cell_id).value;
    worksheet.getCell(current_cell_id).value=round(current_value*工资比率,2);
  });
  const 材料费用比率=材料费用/营业收入;
  cailiao_data_array.forEach((current_cell_id)=>{
    const current_value=worksheet.getCell(current_cell_id).value;
    worksheet.getCell(current_cell_id).value=round(current_value*材料费用比率,2);
  });
  const 制造费用比率=制造费用/营业收入;
  zhizaofeiyong_data_array.forEach((current_cell_id)=>{
    const current_value=worksheet.getCell(current_cell_id).value;
    worksheet.getCell(current_cell_id).value=round(current_value*制造费用比率,2);
  });
  const buffer_result = await workbook.xlsx.writeBuffer();
  return buffer_result;
});

export default router.routes();