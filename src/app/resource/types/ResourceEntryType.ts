import { MusicLabelShort } from "@/shared/types/musicInfo/MusicLabelShort";
import { MusicArtistShort } from "@/shared/types/musicInfo/MusicArtistShort";
import { MusicEntryFormat } from "@/shared/types/musicInfo/MusicEntryFormat";

export type ResourceEntryType = {
    resourceId: number;
    title: string;
    rating: number;
    year: number;
    thumbCoverUrl: string;
    fullCoverUrl: string;
    formats: MusicEntryFormat[],
    mainFormat: MusicEntryFormat,
    mainFormatName: MusicEntryFormat["name"];
    labels: MusicLabelShort[];
    mainLabelName: MusicLabelShort["name"];
    artists: MusicArtistShort[];
    mainArtistName: MusicArtistShort["name"];
}