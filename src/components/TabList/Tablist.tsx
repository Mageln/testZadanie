import { Box, Button } from "@mui/material";
import { ITablist } from "../../models/ITablist";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Tablist = ({ setActiveTab,currentCount, allCount, doneCount, trashCount }:ITablist) => {
  const [activeTab, setActiveTabState] = useState("current");


  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActiveTabState(tab); 
  };



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems:"center",
        color:"white",
        marginTop:20,
        position:"relative"
      }}
    >
      <Button
       sx={{color:"white"}}
        onClick={() =>handleTabClick("current")}
        variant="text"
        color="primary"
        size="medium"
        
      >
        Текущие дела {currentCount > 0 && `(${currentCount})`}
      </Button>
      <Button
        sx={{color:"white"}}
        onClick={() => handleTabClick("all")}
        variant="text"
        color="primary"
        size="medium"
      >
        Все дела  {allCount > 0 && `(${allCount})`}
      </Button>
      <Button
          sx={{color:"white"}}
        onClick={() => handleTabClick("done")}
        variant="text"
        color="primary"
        size="medium"
      >
      
        Выполненные дела {doneCount > 0 && `(${doneCount})`}
      </Button>
      <Button
        sx={{color:"white"}}
        onClick={() => handleTabClick("trash")}
        variant="text"
        color="primary"
        size="medium"
      >
        Корзина {trashCount > 0 && `(${trashCount})`}
      </Button>
      <Box sx={{
          position: "absolute", 
          bottom: -2, 
          left: `${activeTab === "current" ? 150 : activeTab === "all" ? 410 : activeTab === "done" ? 680 : 930}px`, 
          width: "100px",
          height: "2px", 
          backgroundColor: "#0e76d3",
          transition: "left 0.3s ease", 
        }}
      />
    </Box>
  );
};
