import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button, Input } from "@mui/material";

const Sign = () => {
  return (
    <div>
      <h4>Sign in To NVC Fund bank</h4>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Input type="text" placeholder="name" />
          <Input type="text" placeholder="password" />
          <Button>submit</Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Sign;
