import {Schema, model} from 'mongoose';

const productSchema = new Schema ({
    name: String,
    category: String,
    price: Number,
    imgURL: String
}, {
    timestamps: true, // Para que añada fecha creación en cada nuevo registro y su última fecha de actualización (2 campos se crean)
    versionKey: false // Para que cada vez que se crea un documento no aparezca en su guión subió nube
});

export default model('Product', productSchema);