import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChipInput from 'material-ui-chip-input';

const styles = {};

function Chips({ onChange, tags, classes }: { onChange: any; tags: any; classes: any }) {

  const handleAddChip = (chip: string) => {
    tags || (tags = {});
    tags[chip] = true;
    onChange({ tags });
  }

  const handleDeleteChip = (chip: string, index: number) => {
    tags[chip] = false;
    onChange({ tags });
  }

  return (
    <ChipInput
      alwaysShowPlaceholder={true}
      placeholder={'Enter tag'}
      classes={classes}
      value={tags ? Object.keys(tags).filter(key => tags[key]) : []}
      onAdd={handleAddChip}
      onDelete={handleDeleteChip}
    />
  );
}

export default withStyles(styles)(Chips);
