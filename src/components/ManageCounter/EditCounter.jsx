import React, { useState } from "react";

const EditCounter = ({ counter }) => {
  const [name, setName] = useState(counter.name);
  const [canSave, setCansave] = useState(true);

  function onChange({ target }) {
    setName(target.value);
    if (target.value.trim === "") setCansave(false);
  }

  return (
    <Overlay>
      <Container>
        <Title>Edit Counter</Title>
        <Form onSubmit={handleAddCounter}>
          <Input
            onChange={onChange}
            value={name}
            type="text"
            placeholder="Counter name"
            autoFocus
          />
          <ColorsList setColor={setColor} defaultColor={color} />
          <ButtonGroup>
            <Button type="button" onClick={() => handleDisplay(false)}>
              Close
            </Button>
            <Button disabled={!canSave} type="submit">
              Save
            </Button>
          </ButtonGroup>
        </Form>
      </Container>
    </Overlay>
  );
};

export default EditCounter;
