

export interface ITablist{
    activeTab: string; 
    setActiveTab: (tab: string) => void; 
    currentCount: number;
    allCount: number; 
    doneCount: number;
    trashCount: number; 

}