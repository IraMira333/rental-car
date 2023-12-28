import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MenuMobButton } from './MobileMenu.styled';
import { MobMenuList } from './MobMenu/MobMenu';

export default function MobMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handeOnClose = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <MenuMobButton type="button" onClick={() => handeOnClose()}>
        <IoMenu size={32} color="#555657" />
      </MenuMobButton>
      {isMenuOpen && (
        <Modal closeModal={handeOnClose} style={{ color: 'red' }}>
          <MobMenuList handeOnClose={() => handeOnClose()} />
        </Modal>
      )}
    </>
  );
}
