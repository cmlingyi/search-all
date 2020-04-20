interface IData {
    searchValue: string;
    tagList: ITagNode[];
}
interface ITagNode {
    id: number;
    text: string;
    active: boolean;
}
Page({
    data: {
        searchValue: '',
        tagList: [],
    } as IData,
    onLoad() {
        this.fetchData();
    },
    fetchData() {
        const tagList = [
            { id: 1, text: '知乎', active: false },
            { id: 2, text: '豆瓣', active: false },
            { id: 3, text: '小红书', active: false },
        ];
        tagList.unshift({ id: 0, text: '全部', active: false });
        this.setData({ tagList });
    },
    tagClicked(e: any) {
        const index = e.target.dataset.index;
        const { tagList } = this.data;
        if (index === 0) {
            const allActive = tagList[index].active;
            tagList.map((item) => {
                item.active = !allActive;
            });
        } else {
            tagList[index].active = !tagList[index].active;
        }
        this.setData({ tagList });
    },
});
