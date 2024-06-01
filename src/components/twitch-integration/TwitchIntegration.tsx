import { useEffect, useState } from "react";
import { fetchClips, getAccessToken, getIdByUserName } from "./twitch-integration";
import ShowClip, { ClipType } from "./ShowClip"; // Importe le composant ShowClip
import '../../assets/css/twitch-integration.css'

const TwitchIntegration = () => {
  const [clips, setClips] = useState<ClipType[]>([]); // Initialise l'état des clips à un tableau vide
  const [loading, setLoading] = useState(true); // État pour suivre le chargement



  useEffect(() => {
    getAccessToken().then((token) => {
      getIdByUserName("seteemio", token).then((broadCasterId) => {
        fetchClips(broadCasterId, token)
          .then((clips) => {
            setClips(clips.data);
            setLoading(false); // Arrête le chargement une fois les clips récupérés
          })
          .catch((error) => {
            console.error("Erreur lors de la récupération des clips :", error);
            setLoading(false); // Assure d'arrêter le chargement même en cas d'erreur
          });
      });
    });
  }, []);


  const selectRandomClips = (clips: ClipType[]) => {
    const randomIndexes: number[] = [];
    const randomClips = [];

    // Génère trois index aléatoires distincts
    while (randomIndexes.length < 3) {
      const randomIndex = Math.floor(Math.random() * clips.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
        randomClips.push(clips[randomIndex]);
      }
    }

    return randomClips;
  };

  // Si les clips sont en cours de chargement, affiche un message de chargement
  if (loading) {
    return <p>Chargement des clips...</p>;
  }

  // Une fois que les clips sont disponibles, affiche-les
  return (
    <div>
      {selectRandomClips(clips).map((clip: ClipType) => (
        <ShowClip key={clip.id} clip={clip} />
      ))}
    </div>
  );
};

export default TwitchIntegration;