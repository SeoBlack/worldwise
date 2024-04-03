/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import { useCities } from "../context/CitiesContext";
export default function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add Your First City By Clicking a City On The Map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
