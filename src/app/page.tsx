
"use client"
import { useContext } from "react";
import { OrderContext, SearchContext } from "@/context";
import { MainHome, Navbar, FooterView as Footer } from "@/sections";
import { ModalPlate, MainLoading, ModalPlateRequired, ModalInfo } from "@/components/molecules";

export default function HomePage() {

  const { loading, modalPlate } = useContext(OrderContext);

  const { modalInfo } = useContext(SearchContext)

  console.log(loading)

  return (
    <>
      {loading ?
        <MainLoading /> :
        <>
          <Navbar />
          <MainHome />
          <Footer />
          {modalPlate.stateModal && modalPlate.modalType === 'main' && <ModalPlate buttonName='Agregar' />}
          {modalPlate.stateModal && modalPlate.modalType === 'required' && modalPlate.modalEditOrDeleteOrConfirm === 'temporary' && (
            <ModalPlateRequired />
          )}
          {modalInfo.state && <ModalInfo />}
        </>}
    </>
  )
}
