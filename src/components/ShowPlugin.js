import { Stack, Table, TableBody, TableCell } from "@mui/material";
import {
  InstructionListItem,
  StyledLink,
  BoldTypography,
  NormalTypography,
  StyledTableRow,
  StyledTableContainer,
} from "components/styles/PluginStyles";
import { IconButton } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

export default function ShowPlugin({ plugin, pluginName, copyToClipboard }) {
  return (
    <Stack spacing={5}>
      <BoldTypography>Success, your plugin has been generated!</BoldTypography>
      <NormalTypography>Anyone can now use your plugin by:</NormalTypography>
      <ol style={{ listStyleType: "decimal" }}>
        <InstructionListItem>
          Opening{" "}
          <StyledLink href="https://chat.openai.com">
            https://chat.openai.com
          </StyledLink>
        </InstructionListItem>
        <InstructionListItem>
          In the Model drop down, select "Plugins" (note, if you don't see it
          there, you don't have access yet)
        </InstructionListItem>
        <InstructionListItem>Select "Plugin store"</InstructionListItem>
        <InstructionListItem>
          Select "Install an unverified plugin"
        </InstructionListItem>
        <InstructionListItem>Enter domain shown below</InstructionListItem>
      </ol>
      <StyledTableContainer>
        <Table>
          <TableBody>
            <StyledTableRow hover key={plugin}>
              <TableCell style={{ width: "100px" }}>
                <NormalTypography>Domain:</NormalTypography>
              </TableCell>
              <TableCell>
                <Stack
                  direction="row"
                  sx={{
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onClick={() => copyToClipboard(plugin)}
                >
                  <NormalTypography>{plugin}</NormalTypography>
                  <IconButton>
                    <FileCopyIcon fontSize="small" sx={{ color: "#fff" }} />
                  </IconButton>
                </Stack>
              </TableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </StyledTableContainer>
      <NormalTypography>
        Once you have connected, you can monitor your API hits{" "}
        <a
          href={`${pluginName}/request_logs`}
          style={{ color: "#C987FF", textDecoration: "underline" }}
        >
          here.
        </a>
      </NormalTypography>
    </Stack>
  );
}
