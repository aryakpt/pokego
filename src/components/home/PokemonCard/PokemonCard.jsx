import { Link } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../../services/slices/pokemonSlice';
import styles from './PokemonCard.module.css';
import {
  BugElement,
  DarkElement,
  DragonElement,
  ElectricElement,
  FairyElement,
  FightingElement,
  FireElement,
  FlyingElement,
  GhostElement,
  GrassElement,
  GroundElement,
  IceElement,
  NormalElement,
  PoisonElement,
  PsychicElement,
  SteelElement,
  RockElement,
  WaterElement,
} from '../../../assets/logo';

const Elements = {
  bug: BugElement,
  dark: DarkElement,
  dragon: DragonElement,
  electric: ElectricElement,
  fairy: FairyElement,
  fighting: FightingElement,
  fire: FireElement,
  flying: FlyingElement,
  ghost: GhostElement,
  grass: GrassElement,
  ground: GroundElement,
  ice: IceElement,
  normal: NormalElement,
  poison: PoisonElement,
  psychic: PsychicElement,
  steel: SteelElement,
  rock: RockElement,
  water: WaterElement,
};

const PokemonCard = ({ pokemon }) => {
  const { data, isLoading } = useGetPokemonByNameQuery(pokemon.name);

  if (!isLoading)
    return (
      <li>
        <Link to={`/detail/${pokemon.name}`} className={styles['pokemon-card']}>
          <img src={data.sprites.front_default} alt="not found" />
          <div className={styles['pokemon-card__detail']}>
            <p className={styles['pokemon-card__name']}>{pokemon.name}</p>
            <div className={data?.types.length > 1 ? styles['pokemon-card__element'] : ''}>
              {data?.types.map((type, idx) => {
                if (idx < 4) {
                  return (
                    <img
                      key={type.slot}
                      className={styles['pokemon-card__element-detail']}
                      src={Elements[type.type.name]}
                      alt={type.type.name}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div>#{data?.order}</div>
        </Link>
      </li>
    );
};

export default PokemonCard;
