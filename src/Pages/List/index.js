import { useState } from "react";
import Card from "../../componets/Card";

const List = () => {
    const [wishItem, setWhishItem] = useState('');

    const [wishlist, setWishlist] = useState([
        {
            id: new Date().getTime(),
            title: 'Tênis Nike',

        }
    ]);
    const addWhishItem = () => {
        const newWhshItem = {

            id: new Date().getTime(),
            title: wishItem,

        }
        setWishlist([...wishlist, newWhshItem]);
        setWhishItem('')
    }
    const removeWhishItem = (id) => {
        const removeConfirm = window.confirm('Tem certeza que deseja remover esse desejo?'
        );

        if (removeConfirm) {
            const newWhshList = wishlist?.filter((item) => item?.id !== id);
            setWishlist(newWhshList)
        }

    }

    return (
        <div className="container">
            <div className="col-12 col-md-8 offset-md-2 col mt-5 text-center">
                <h1 className="mb-2" style={{ color: 'white' }}>Lista de desejos</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Adicione um desejo"
                        value={wishItem}
                        onChange={(e) => {

                            setWhishItem(e.target.value);
                        }} />
                    <div class="input-group-append">
                        <button
                            onClick={addWhishItem}


                            class="btn btn-success"
                            type="button"
                            id="button-addon2">Adicionar desejo</button>
                    </div>

                </div>
            </div>
            <div style={{ color: 'white' }} className="row mt-5">{wishlist?.map(item =>
                <Card item={item} onRemove={(id) => removeWhishItem(id)} />
            )}
            </div>
        </div>

    );
};
export default List;
