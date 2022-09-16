import { Request, Response } from 'express'
import EmailService from '../services/EmailService';

const users = [
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: '' }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'John',
                email: 'john@example.com'
            },
            message: {
                subject: 'Welcome',
                body: 'Welcome'
            }
        });

        return res.send();
    }
}