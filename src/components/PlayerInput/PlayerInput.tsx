import { TextField, IconButton } from "@mui/material" 
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { LabelBox } from "./PlayerInput.styles";

interface PlayerInputProps {
  value: string
  onChange: (value: string) => void
  onRemove?: () => void
}

export const PlayerInput = ({ value, onChange, onRemove }: PlayerInputProps) => {
  return (
    <LabelBox>
      <FiberManualRecordIcon color="success" sx={{ fontSize: 12 }} />

      <TextField
        variant="outlined"
        type="text"
        placeholder="Enter player name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {onRemove && (
        <IconButton
          onClick={onRemove}
          sx={{ color: "#efaaa2", backgroundColor: "#30201f" }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </LabelBox>
  )
}