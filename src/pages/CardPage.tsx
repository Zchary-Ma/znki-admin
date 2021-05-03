import React, { FC, useState, useEffect } from 'react';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useLocation } from 'react-router-dom';
import { CardService } from '../shared/api/api';

interface ICardRequest {
  deckId: number;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  placeholder: {
    backgroundColor: '#12de33',
    height: '200px',
    marginBottom: '1rem',
  },
});

const CardPage: FC<any> = (props) => {
  const {
    state: { deckId },
  }: any = useLocation();

  const [state, setState] = useState({
    cards: [],
  });
  const classes = useStyles();

  useEffect(() => {
    CardService.cardControllerGetCards({
      body: {
        take: 20,
        skip: 0,
        where: {
          deckId,
        },
      },
    }).then((res) => {
      if (res.message === 'success') {
        state.cards = res.data;
      }
    });
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        padding: 2,
      }}
    >
      <Container>
        <section className={classes.placeholder}>
          Card Page | placeholder
        </section>
        {deckId ? <BasicTable /> : <Typography>No DeckId provided</Typography>}
      </Container>
    </Box>
  );
};

CardPage.propTypes = {
  // bla: PropTypes.string,
};

CardPage.defaultProps = {
  // bla: 'test',
};

export default CardPage;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
