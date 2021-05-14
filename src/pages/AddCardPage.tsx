import React, { ReactElement, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { EnumCreateNoteDtoType, CardService } from '../shared/api/api';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  container: { margin: theme.spacing(5) },
  item: {
    width: '100%',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

interface Props {
  deckId: number;
  closeDrawer: (bool) => void;
}
interface IInputValue {
  label: string;
  value: 'title' | 'content';
  type: EnumCreateNoteDtoType;
  content: string;
}

export default function AddCardPage({
  deckId,
  closeDrawer,
}: Props): ReactElement {
  const classes = useStyles();
  const [inputValues, setInputValues] = useState<IInputValue[]>([
    {
      label: 'title',
      value: 'title',
      type: EnumCreateNoteDtoType.TEXT,
      content: '',
    },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputValues];
    list[index].content = value;
    setInputValues(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    if (index == 0) {
      // can't remove title
      return;
    }
    const list = [...inputValues];
    list.splice(index, 1);
    setInputValues(list);
  };

  // handle click event of the Add button
  const handleAddClick = (index) => {
    setInputValues([
      ...inputValues,
      {
        label: `appendix ${index}`,
        value: 'content',
        content: '',
        type: EnumCreateNoteDtoType.TEXT,
      },
    ]);
  };

  // handle create card event
  const handleSubmit = (a) => {
    if (inputValues.length >= 2) {
      CardService.cardControllerAddCard({
        body: {
          deckId,
          title: inputValues[0].content,
          notes: inputValues
            .slice(1)
            .map((item) => ({ content: item.content, type: item.type })),
        },
      }).then((res) => {
        if (res.message === 'success') {
          closeDrawer(false);
        }
      });
    }
  };

  const handleClose = (val) => {
    closeDrawer(val);
  };

  return (
    <>
      <Grid container className={classes.container} alignItems="center">
        {inputValues.map((item, index) => {
          return (
            <Grid item className={classes.item} key={index}>
              <FormControl margin="dense" variant="filled">
                <InputLabel htmlFor="input">{item.label}</InputLabel>
                <Input
                  id="input"
                  style={{
                    width: '300px',
                  }}
                  name={item.value}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </FormControl>
              {inputValues.length !== 1 && (
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  onClick={() => handleRemoveClick(index)}
                >
                  <RemoveIcon />
                </IconButton>
              )}
              {inputValues.length - 1 === index && (
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  onClick={() => handleAddClick(index)}
                >
                  <AddIcon />
                </IconButton>
              )}
            </Grid>
          );
        })}
      </Grid>
      <Grid container justifyContent="center">
        <ButtonGroup variant="text" color="primary" fullWidth>
          <Button onClick={() => handleSubmit(inputValues)}>Create</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </ButtonGroup>
      </Grid>
    </>
  );
}
