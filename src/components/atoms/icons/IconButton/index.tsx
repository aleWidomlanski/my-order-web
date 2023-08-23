"use client"
import { useContext } from 'react';
import { OrderContext } from '@/context';
import { FaRegCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { IconButtonView } from './IconButtonView'

interface Props {
  buttonName: string
}

const requestTrash = {
	color: "#fe0000"
}



export const IconButton = ({ buttonName }: Props) => {

  const { modalPlate, setModalPlate, cartTemporary, setCartTemporary } = useContext(OrderContext);

  const handleClickRequest = () => {

    console.log(cartTemporary)

/*     if (localStorage.getItem('idPeopleTableId') && localStorage.getItem('idPeopleTableId') !== "undefined") { */
    /*   console.log(localStorage.getItem('idPeopleTableId')) */
      setCartTemporary(
        [{
          ItemID: modalPlate.ItemID,
          title: modalPlate.title,
          quantity: modalPlate.quantity,
          price: modalPlate.price,
        },
        ...cartTemporary])

/*       localStorage.setItem('cartTemporary', JSON.stringify([{
        ItemID: modalPlate.ItemID,
        title: modalPlate.title,
        quantity: modalPlate.quantity,
        price: modalPlate.price,
      },
      ...cartTemporary
      ])) */



      setModalPlate({
        ...modalPlate,
        modalType: 'required',
        modalEditOrDeleteOrConfirm: 'temporary',
      });
   /*  } */
  };

  const handleEdit = () => {
/*     if (localStorage.getItem('idPeopleTableId') && localStorage.getItem('idPeopleTableId') !== "undefined") { */
      const cartTemporaryEdit = cartTemporary.filter((item, i) => {
        if (i === modalPlate.index) {
          item.quantity = modalPlate.quantity
        }
        return item
      })

      setCartTemporary(cartTemporaryEdit)

   /*    localStorage.setItem('cartTemporary', JSON.stringify(cartTemporaryEdit)) */

      setModalPlate({
        ...modalPlate,
        modalType: 'required',
        modalEditOrDeleteOrConfirm: 'edit',
      });
   /*  } */
  };

  const handleDelete = () => {

 /*    if (localStorage.getItem('idPeopleTableId') && localStorage.getItem('idPeopleTableId') !== "undefined") { */
      const cartTemporaryDelete = cartTemporary.filter((item, index) => {
        return index !== modalPlate.index
      })

      setCartTemporary(cartTemporaryDelete)

/*       localStorage.setItem('cartTemporary', JSON.stringify(cartTemporaryDelete)) */

      setModalPlate({
        ...modalPlate,
        modalType: 'required',
        modalEditOrDeleteOrConfirm: 'delete',
      });
    /* } */
  };

  return (
    <>
      {buttonName === "Agregar" && <IconButtonView buttonName={buttonName} operation={handleClickRequest}><FaRegCheckCircle /></IconButtonView>}  
      {buttonName === "Editar" && <IconButtonView buttonName={buttonName} operation={ handleEdit}><FaRegCheckCircle /></IconButtonView>}  
      {buttonName === "Eliminar" && <IconButtonView buttonName={buttonName} operation={ handleDelete} styleButton={requestTrash}><FaTrashAlt/></IconButtonView>}
    </>
  )
}
