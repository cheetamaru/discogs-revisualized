import { TableColumnsType } from "antd"
import Table from "antd/es/table"
import RenderResourceFormat from "../ui/components/ResourceTableCellRenders/RenderResourceFormat";
import RenderResourceInfo from "../ui/components/ResourceTableCellRenders/RenderResourceInfo";
import RenderResourceYear from "../ui/components/ResourceTableCellRenders/RenderResourceYear";

const getColumns = (): TableColumnsType => {
    return [
        {
            key: "format",
            width: "74px",
            title: "Format",
            align: "center",
            render: RenderResourceFormat,
        },
        {
            key: "info",
            title: "Title — Artist",
            render: RenderResourceInfo,
        },
        {
            key: "year",
            title: "Year",
            width: "60px",
            align: "center",
            dataIndex: "year",
            render: RenderResourceYear,
        },
        Table.EXPAND_COLUMN,
    ]
}

export const ResourceTableMinColumns = {
    getColumns,
}
