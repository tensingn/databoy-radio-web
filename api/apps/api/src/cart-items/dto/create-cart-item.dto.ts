import { ProductDto } from '../../products/dto/product.dto';
import { Size } from '../../products/enums/sizes.enum';

export class CreateCartItemDto {
  product: ProductDto;
  quantity: number;
  size: Size;
}
