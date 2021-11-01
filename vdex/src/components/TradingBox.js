import Box from "@mui/material/Box";
import SwapButton from "./SwapButton";
import SwapCoinBox from "./SwapCoinBox.js";

function TradingBox() {
    return(
        <div position="static">
            <Box
                sx={{
                    width: "570px",
                    height: "430px",
                    backgroundColor: '#1E1E1E',
                    borderRadius: "20px",
                    boxShadow: "8px 8px 4px rgba(0, 0, 0, 0.25)",
                    flexDirection: "column"
                }}
            >
                <SwapCoinBox label="Swap From"/>
                <SwapCoinBox label="Swap To"/>
                <SwapButton />
            </Box>
        </div>
    );
}

export default TradingBox;