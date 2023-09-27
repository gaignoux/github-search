import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "@base/store";
import { PageInfo } from "@base/interfaces/search";
import { setAfter, setBefore } from "@base/store/repositorySlice";
import { Button, Grid } from "@mui/material";

/**
 * React component for handling pagination controls for a list of items.
 *
 * @returns {ReactElement} The rendered component.
 */
export const Pagination = (): ReactElement => {
  const pageInfo = useAppSelector<PageInfo | undefined>(
    ({ repository }) => repository.pageInfo,
  );
  const dispatch = useAppDispatch();

  /**
   * Handles navigating to the next page of items.
   */
  const handleGotoNextPage = () => {
    dispatch(setAfter(pageInfo?.endCursor || ""));
    dispatch(setBefore(""));
  };

  /**
   * Handles navigating to the previous page of items.
   */
  const handleGotoPreviousPage = () => {
    dispatch(setAfter(""));
    dispatch(setBefore(pageInfo?.startCursor || ""));
  };

  return (
    <div className="flex flex-row space-x-6">
      <Grid
        container
        direction="row"
        pt={2}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <Button
            variant="contained"
            onClick={handleGotoPreviousPage}
            disabled={!pageInfo?.hasPreviousPage}
          >
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={handleGotoNextPage}
            disabled={!pageInfo?.hasNextPage}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
