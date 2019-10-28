import { Category } from './pages/categories/shared/category.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
    // cria um banco de dados para uso interno
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Lazer', description: 'Cinema, parques, praia, etc'},
            { id: 2, name: 'Saúde', description: 'Plano de Saúde e Rémedios'},
            { id: 3, name: 'Salário', description: 'Recebimento de Salário'},
            { id: 4, name: 'Moradia', description: 'Pagamento de Contas da Casa'},
        ];
        return {categories}
    }
}