let itin = ['montpellier', 'Sète', 'Agde'];

class train {

    /**Créer et initialise les objets de la classe train.
     * @param {number} vitesseMax
     * @param {number} tauxAcceleration
     * @param {boolean} ouverturePortes
     * @param {number} vitesseActuele
     * @param {number} tauxFrein
     * @param {number} nbPassagers
     * @param {string} gareActuelle
     * @param {string} itineraire
     */
    constructor(vitesseMax, tauxAcceleration, ouverturePortes, vitesseActuele, tauxFrein, nbPassagers, gareActuelle, itineraire) {
        this.vitesseMax = vitesseMax;
        this.tauxAcceleration = tauxAcceleration;
        this.ouverturePortes = ouverturePortes;
        this.vitesseActuele = vitesseActuele;
        this.tauxFrein = tauxFrein;
        this.nbPassagers = nbPassagers;
        this.gareActuelle = gareActuelle;
        this.itineraire = itineraire;
    }

    /**Méthode pour l'ouverture des portes.
     * @param {boolean} params
     */
    porte_ouverte(params) {
        this.ouverturePortes = params;
    }

    /**Méthode pour la fermeture des portes.
    * @param {boolean} params
    */
    porte_fermee(params) {
        this.ouverturePortes = params;
    }

    /**Méthode pour compter les passagers.
     * @param {numbers} dedans
     * @param {numbers} dehors
     */
    monteesDescentes(dedans, dehors) {
        this.nbPassagers += dedans - dehors;
    }

    /**Méthode pour modifier la gareActuele.
     * @param {string} params
     */
    quitteGare(params) {
        this.gareActuelle = params;
    }

    /**Méthode pour modifier la gareActuele.
     * @param {string} params
    */
    entreEnGare(params) {
        this.gareActuelle = params;
    }

    /**Méthode pour l'acceleration du train.
    * @param {number} params
   */
    accelere(params) {
        this.vitesseActuele += this.tauxAcceleration * params;
        if(this.vitesseActuele > 150) {
            this.vitesseActuele = 150;
        }
    }

    /**Méthode pour la décélération du train.
    * @param {number} params
    */
    decelere(params) {
        this.vitesseActuele -= this.tauxFrein * params;
    }
}
// 
let ThomasTheTankEngine = new train(150, 10, false, 0, 10, 0, itin[0], itin[2]);

console.log(ThomasTheTankEngine);
console.log(`Le train en provenance de ${itin[0]} à destination de ${itin[2]} va bientôt partir.`);
ThomasTheTankEngine.porte_ouverte(true);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.monteesDescentes(125, 0);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.porte_fermee(false);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.quitteGare('');
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.accelere(15);
console.log(ThomasTheTankEngine);
console.log("Une vache sauvage apparait, vite, il faut freiner");
ThomasTheTankEngine.decelere(15);
console.log(ThomasTheTankEngine);
console.log("La vache a peur, elle se part");
ThomasTheTankEngine.accelere(15);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.decelere(2);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.decelere(3);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.decelere(2);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.decelere(2);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.decelere(3);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.decelere(2.5);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.decelere(0.5);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.entreEnGare(itin[1]);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.porte_ouverte(true);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.monteesDescentes(100, 95);
console.log(ThomasTheTankEngine);
ThomasTheTankEngine.porte_fermee(false);
console.log(ThomasTheTankEngine);