import React, { FC, useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Container,
  Typography,
  TableSortLabel,
  Toolbar,
  Divider,
  Drawer,
  Input,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useLocation } from 'react-router-dom';
import { CardService } from '../shared/api/api';
import { format, parseISO } from 'date-fns';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import AddCardPage from './AddCardPage';
interface ICardRequest {
  deckId: number;
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  placeholder: {
    backgroundColor: '#12de33',
    height: '200px',
    marginBottom: '1rem',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  drawer: {
    marginTop: '64px',
    '& .container': {
      padding: '1rem',
      width: '480px',
      height: '100%',
    },
  },
}));

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
        {deckId ? (
          <CardTable deckId={deckId} />
        ) : (
          <Typography>No DeckId provided</Typography>
        )}
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
const CardTable = ({ deckId }) => {
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('title');
  const [selected, setSelected] = useState([]);
  const [title, setTitle] = useState('');
  const [windowOpen, setWindowOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [cardsInfo, setCardsInfo] = useState({} as any);

  useEffect(() => {
    CardService.cardControllerGetCards({
      body: {
        take: 500, // TODO 前端ajax分页
        skip: 0,
      },
    })
      .then((res) => {
        if (res.message === 'success') {
          setCardsInfo(res?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = () => setWindowOpen(true);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setWindowOpen(open);
  };

  const CardTableToolbar = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <SearchIcon style={{ display: 'block' }} color="inherit" />
          </Grid>
          <Grid item xs>
            <Input placeholder="search cards" />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleClick}>
              Add Card
            </Button>
            <Tooltip title="Reload">
              <IconButton>
                <RefreshIcon color="inherit" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const CardTableHead = (props: any) => {
    const {
      classes,
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;
    const createSortHandler = (property: any) => (event: any) => {
      onRequestSort(event, property);
    };
    const cells: { align: 'left' | 'right'; [key: string]: any }[] = [
      {
        id: 'title',
        align: 'left',
        numeric: false,
        disablePadding: true,
        label: 'Title',
      },
      {
        id: 'status',
        align: 'right',
        numeric: false,
        disablePadding: true,
        label: 'Status',
      },
      {
        id: 'due',
        align: 'right',
        numeric: false,
        disablePadding: true,
        label: 'Due',
      },
      {
        id: 'reviews',
        align: 'right',
        numeric: false,
        disablePadding: true,
        label: 'Reviews',
      },
      {
        id: 'createAt',
        align: 'right',
        numeric: false,
        disablePadding: true,
        label: 'Create At',
      },
      {
        id: 'updateAt',
        align: 'right',
        numeric: false,
        disablePadding: true,
        label: 'Update At',
      },
    ];

    return (
      <TableHead>
        <TableRow>
          {cells.map((headCell) => (
            <TableCell key={headCell.id} {...headCell}>
              <TableSortLabel
                active={orderBy === headCell.id}
                // direction={orderBy === headCell.id ? order : 'asc'}
                // onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {/* {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </span>
                ) : null} */}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handlerRowChange = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onChangeSearchTitle = (e: any) => {
    const searchTitle = e.target.value;
    setTitle(searchTitle);
  };

  return (
    <Paper>
      <CardTableToolbar />
      <Divider />
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <CardTableHead />
          <TableBody>
            {!cardsInfo.data
              ? []
              : cardsInfo?.data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => (
                    <TableRow key={item.title}>
                      <TableCell component="th" scope="item">
                        {item.title}
                      </TableCell>
                      <TableCell align="right">{item.status}</TableCell>
                      <TableCell align="right">{item.due}</TableCell>
                      <TableCell align="right">{item.reviews}</TableCell>
                      <TableCell align="right">
                        {format(parseISO(item.createAt), 'MM/dd/yyyy')}
                      </TableCell>
                      <TableCell align="right">
                        {format(parseISO(item.updateAt), 'MM/dd/yyyy')}
                      </TableCell>
                    </TableRow>
                  ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        onPageChange={handleChangePage}
        onRowsPerPageChange={handlerRowChange}
        component="div"
        page={page}
        rowsPerPage={rowsPerPage}
        showFirstButton
        showLastButton
        count={cardsInfo?.total || 0}
        rowsPerPageOptions={[5, 10, 25]}
      />
      <Drawer
        anchor="right"
        open={windowOpen}
        onClose={toggleDrawer(false)}
        className={classes.drawer}
      >
        <Paper className="container">
          <AddCardPage deckId={deckId} closeDrawer={toggleDrawer(false)} />
        </Paper>
      </Drawer>
    </Paper>
  );
};
