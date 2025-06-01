import { useEffect, useState } from 'react';

import { useWallet } from '@demox-labs/aleo-wallet-adapter-react';
import {
  WalletNotConnectedError
} from "@demox-labs/aleo-wallet-adapter-base";
import { useNavigate } from 'react-router-dom';
import './css/Accueil.css';
import GradientBackground from './css/GradientBackground';
import {IoArrowBackOutline } from 'react-icons/io5';


export default function Evaluate(){

    const { publicKey, connected , requestRecords} = useWallet();
    const [message, setMessage] = useState<string>('');
    
    const navigate = useNavigate();

    useEffect(() => {
    if ( !connected || !publicKey) {
    navigate('/'); // redirige vers la page d’accueil Aleo
    }
    }, [connected, publicKey]);

    if (!publicKey) return;

  function extractNumericDocId(docId: string): string {
  const match = /^(\d+)/.exec(docId);
  if (!match) {
    throw new Error("Aucun nombre trouvé au début du docId");
  }

  return BigInt(match[1]).toString();
}

      const handleLaunchEval = async () => {
        const program = "share_results.aleo";
        if (!publicKey) throw new WalletNotConnectedError();

        if (requestRecords) {
        const records = await requestRecords(program);
        console.log("Records bruts:", records);
        setMessage(extractNumericDocId(records[0]?.data?.resulteval ?? ""));
      }
    };

    const handleBack = () => {
        navigate('/Acceuil');
    };

    
   
    return(
        <div className="accueil-page">
          
        <div className="container ">
          <GradientBackground />
        <div className="content ">
          <button className="back-button" onClick={handleBack}>
                    <IoArrowBackOutline size={24} />
                  </button>
        
          
        <button className="main-button" onClick={handleLaunchEval}>
            CheckOnTheResults
        </button>
        <p>{message}</p>
        </div>
      </div>
      </div>
    );
}