import mongoose from 'mongoose';

const connectToMongodb = async () => {
    try {
        const res = await mongoose.connect(process.env.DATABASE_URL);
        if (res) {
            console.log('Connected to the database');
        }
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

export default connectToMongodb;
