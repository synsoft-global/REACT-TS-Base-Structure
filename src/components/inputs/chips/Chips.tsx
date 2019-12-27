import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChipInput from 'material-ui-chip-input';

const styles = {};

function Chips({ onChange, tags, classes }: { onChange: any; tags: any; classes: any }) {

  const handleAddChip = (chip : string) => {
    tags || (tags = {});
    tags[chip] = true;
    onChange({tags});
  }
  
  const handleDeleteChip = (chip :string,index: number) => {
    tags[chip] = false;
    onChange({tags});
  }

  return (
    <ChipInput
      alwaysShowPlaceholder={true}
      // use tags set to false as autocomplete suggestions -- this does not work in this component, needs another lib
      // see https://material-ui.com/demos/autocomplete/
      // dataSource={tags ? Object.keys(tags).filter(key=> !tags[key]) : []}
      placeholder={'Enter tag'}
      classes={classes}
      // only show tags that are `true`; handle object without `tags` attribute
      value={tags ? Object.keys(tags).filter(key=> tags[key]) : []}
      onAdd={handleAddChip}
      onDelete={handleDeleteChip}
    />
  );
}

export default withStyles(styles)(Chips);
