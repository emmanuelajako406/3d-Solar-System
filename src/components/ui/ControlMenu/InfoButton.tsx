// InfoButton.tsx
import {  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { IconInfoCircle } from '@tabler/icons-react';

const InfoButton = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <Button 
      isIconOnly 
      onPress={onOpen}
      color='primary' 
      variant='flat'
    >
      <IconInfoCircle />
    </Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="opacity-90">
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Solar System </ModalHeader>
          <ModalBody>
            <p>Todo:</p>
            <ul className="text-sm">
              <li>Earths moon</li>
              <li>Accurate Lighting</li>
              <li>Accurate planet atmospheres</li>
              <li>Meteors shower</li>
              <li>Space station</li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  </>
  );
};

export default InfoButton;
