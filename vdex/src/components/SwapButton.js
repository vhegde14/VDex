import Button from '@mui/material/Button';

function SwapButton() {
  return (
    <div position="absolute">
        <Button sx={{
            width: "460px",
            height: "45px",
            backgroundColor: "#003c75",
            color: "#fff",
            boxShadow: "8px 8px 4px rgba(0, 0, 0, 0.25)",
            marginLeft: "50px",
            marginRight: "50px",
            '&:hover': {
                backgroundColor: '#0056a8',
                boxShadow: 'none',
            }
        }}>
            SWAP
        </Button>
    </div>
  );
}

export default SwapButton;
