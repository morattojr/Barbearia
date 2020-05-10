import { Router } from 'express';
import { uuid } from 'uuidv4';

const transactionsRouter = Router();

const appointments = [];

transactionsRouter.get('/', async (request, response) => {
  // const transactionRepository = await getCustomRepository(
  //   TransactionsRepository,
  // );
  // const balance = await transactionRepository.getBalance();
  // const transactions = await transactionRepository.find();
  // return response.json({ transactions, balance });
  return response.json({ message: 'Hello' });
});

transactionsRouter.post('/', async (request, response) => {
  const { provider, date } = request.body;
  // const createTransaction = new CreateTransactionService();

  const appointment = {
    id: uuid(),
    provider,
    date,
  };

  appointments.push(appointment);
  // const appointment = await createTransaction.execute({
  //   provider,
  //   date,
  // });
  // return response.json(transaction);
  return response.json(appointment);
});

export default transactionsRouter;
