import Button from '@mui/material/Button';

function SwapButton() {
  return (
    <div position="absolute">
        <Button sx={{
            width: "240px",
            height: "45px",
            backgroundColor: "#003c75",
            color: "#fff",
            boxShadow: "8px 8px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
            marginLeft: "160px",
            marginRight: "160px",
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
