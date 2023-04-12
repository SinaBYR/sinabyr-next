import classes from './addTechTags.module.scss';
import { WithContext as ReactTags } from 'react-tag-input';

export function AddTechTags({ values, setFieldValue }) {
  const handleDelete = i => {
    setFieldValue(
      'technologies',
      values.technologies.filter((_tech, index) => index !== i)
    );
  };

  const handleAddition = tech => {
    setFieldValue(
      'technologies',
      [...values.technologies, tech]
    );
  };

  const handleDrag = (tech, currPos, newPos) => {
    const newTechList = values.technologies.slice();
    newTechList.splice(currPos, 1);
    newTechList.splice(newPos, 0, tech);

    setFieldValue(
      'technologies',
      newTechList
    );
  };

  return (
    <ReactTags
      tags={values.technologies}
      delimiters={[13, 188]}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      handleDrag={handleDrag}
      inputFieldPosition="top"
      allowUnique
      placeholder=""
      name="technologies"
      id="technologies"
      classNames={{
        selected: classes.techList,
        tag: classes.techTag,
        remove: classes.techRemoveBtn
      }}
    />
  )
}