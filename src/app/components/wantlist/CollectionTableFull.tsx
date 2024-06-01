"use client"

import { DiscogsWantlistEntry } from "@/shared/types/discogs/wantlist/DiscogsWantlistEntry"
import { getEntrySrc } from "@/utils/discogsLinks/getEntrySrc";
import { Button, Table } from "antd"
import Paragraph from "antd/es/typography/Paragraph";
import DiscogsLogo from "../discogs/DiscogsLogo";

type Props = {
    data: DiscogsWantlistEntry[]
}

const columns = [
    {
        key: "image",
        dataIndex: ["basic_information", "thumb"],
        title: "Cover",
        width: "60px",
        render: (src: string) => {
            return <>
                <img src={src} alt="lol" height={50} width={50}/>
            </>
        }
    },
    {
        key: "info",
        dataIndex: "basic_information",
        title: "Title — Artist",
        width: "auto",
        render: (info: DiscogsWantlistEntry["basic_information"]) => {
            return <>
                <Paragraph
                    copyable
                    ellipsis={
                        {
                            rows: 2
                        }
                    }
                >
                    {info.title} — {info.artists[0].name}
                </Paragraph>
            </>
        }
    },
    {
        key: "year",
        width: "60px",
        title: "Year",
        align: "center",
        dataIndex: ["basic_information", "year"],
        render: (year: string) => <>{year || '-'}</>
    },
    Table.EXPAND_COLUMN,
]

const CollectionTableFull = ({data}: Props) => {
  return (
    <Table
        dataSource={data}
        columns={columns}
        // showHeader={false}
        pagination={false}
        tableLayout="fixed"
        size="small"
        rowKey="id"
        style={{
            maxWidth: 700
        }}
    />
  )
}

export default CollectionTableFull