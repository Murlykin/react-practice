import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { List, ListItem } from './RecepiList.style'

export const RecipeList = ({ items, onDelete}) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <Recipe item={item} onDelete={onDelete}/>
        </ListItem>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
