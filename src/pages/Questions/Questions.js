import { Box, MenuItem, TextField, Typography } from "@mui/material";
import NavBar from "../../components/navbar/NavBar";

export default function Questions() {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />

        <Box sx={{ flex: 1, margin: '1rem' }}>
        <Typography variant="h5" sx={{ display: 'flex', marginBottom: '1rem' }}>
          Pesquisa
        </Typography>

        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <TextField sx={{ marginRight: '0.5rem' }} label="Nome" fullWidth />

          <TextField sx={{ marginLeft: '0.5rem' }} label="Sobrenome" fullWidth />
        </Box>

        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <TextField sx={{ marginRight: '0.5rem' }} label="Nacionalidade" fullWidth />

          <TextField sx={{ marginLeft: '0.5rem' }} label="Cargo" fullWidth />
        </Box>

        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <TextField sx={{ marginRight: '0.5rem' }} label="Gênero" fullWidth />

          <TextField sx={{ marginLeft: '0.5rem' }} label="Idade" type="number" fullWidth />
        </Box>

        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <TextField select sx={{ marginRight: '0.5rem' }} label="PCD" title="Portador de Deficiência" fullWidth >
            <MenuItem value="yes">Sim</MenuItem>
            <MenuItem value="no">Não</MenuItem>
          </TextField>

          <TextField sx={{ marginLeft: '0.5rem' }} disabled label="Se sim" fullWidth />
        </Box>

        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <TextField rows={3} multiline maxRows={4} label="Observações" fullWidth />
        </Box>
      </Box>
    </Box>
  )
}