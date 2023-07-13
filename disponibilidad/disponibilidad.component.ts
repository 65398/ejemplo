import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.css']
})
export class DisponibilidadComponent implements OnInit {
  espaciosDisponibles: number[] = [];
  espaciosReservados: string[] = [];

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    this.obtenerEspaciosReservados();
  }

  async obtenerEspaciosReservados() {
    const reservasRef = collection(this.firestore, 'Reservas');
    const reservasSnapshot = await getDocs(reservasRef);

    this.espaciosReservados = reservasSnapshot.docs.map((doc) => doc.data()['espacio']);
    this.espaciosDisponibles = this.calcularEspaciosDisponibles();
  }

  calcularEspaciosDisponibles(): number[] {
    const todosLosEspacios = Array.from(Array(50), (_, i) => i + 1);
    const espaciosDisponibles = todosLosEspacios.filter((espacio) => !this.espaciosReservados.includes(espacio.toString()));
    return espaciosDisponibles;
  }

  verificarDisponibilidad(espacio: number): boolean {
    return this.espaciosReservados.includes(espacio.toString());
  }
}