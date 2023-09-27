import { ReactElement } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { TEmptyState } from "@base/types/empty";

/**
 * React component for displaying an empty data message with an optional button.
 *
 * @param {TEmptyState} props - The component props.
 * @param {string} props.text - The text to display as a message.
 * @param {boolean} [props.showButton=false] - Indicates whether to show a button.
 * @returns {ReactElement} The rendered component.
 */
export const EmptyData = ({
  text,
  showButton = false,
}: TEmptyState): ReactElement => {
  return (
    <Box
      borderRadius={8}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
      bgcolor="white"
    >
      <Box height="40px" />
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        p={16}
        borderRadius={8}
      >
        <Typography variant="h5">{text}</Typography>
        <Typography variant="body2">Welcome 👋🏼 Let’s get started.</Typography>
        {showButton && (
          <Button color="info" href="/">
            Search repositories
          </Button>
        )}
      </Stack>
    </Box>
  );
};
