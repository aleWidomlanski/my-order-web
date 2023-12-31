import { ClosedView as Closed, IconButton } from '@/components/atoms';
import { Quantity } from '@/components/molecules';
import { ModalPlate } from '@/interfaces';
import styles from './ModalPlate.module.scss'

interface Props {
    modalPlate: ModalPlate;
    buttonName: string;
    closedModalPlate: () => void;
}

export const ModalPlateView = ({ closedModalPlate, modalPlate, buttonName }: Props) => {
    return (
        <>
            <div className={styles.containerModalPlate} onClick={closedModalPlate}></div>
            <div className={styles.modalPlate}>
                <button onClick={closedModalPlate} className={styles.buttonClosedModal} style={{fontSize:"12px"}}>
                    <Closed />
                </button>
                <h2 className={styles.title}>{modalPlate.title}</h2>
                <p className={styles.description}>{modalPlate.description}</p>
                <p className={styles.price}><span className={styles.priceUnit}>Precio unitario:</span> ${modalPlate.price}</p>
                {buttonName !== "Eliminar" &&
                    <div className={styles.containerQuantity}>
                        <p className={styles.quantity}>Cantidad: </p>
                        <Quantity />
                    </div>
                }

                <IconButton buttonName={buttonName} />
            </div>
        </>
    );
};
