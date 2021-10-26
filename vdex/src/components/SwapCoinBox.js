import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function SwapCoinBox(props) {
    return (
        <div position="relative">
            <FormControl fullWidth sx={{
                width: "460px",
                height: "100px",
                marginTop: "30px",
                marginLeft: "50px",
                marginRight: "50px",
                marginBottom: "50px",
                backgroundColor: "#6C6C6C",
                borderRadius: "20px",
                boxShadow: "8px 8px 4px rgba(0, 0, 0, 0.25)",
            }}>
                <InputLabel id="coin-select-label" style={{color: "#ffffff"}}>{props.label}</InputLabel>
                <Select
                    labelId="coin-select-label"
                    id="coin-select"
                    label={props.label}
                    sx={{
                        width: "460px",
                        height: "100px",
                    }}
                >
                    <MenuItem value={"Ethereum"}>ETH</MenuItem>
                    <MenuItem value={"Bitcoin"}>BTC</MenuItem>
                    <MenuItem value={"Gnosis"}>GNO</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default SwapCoinBox;