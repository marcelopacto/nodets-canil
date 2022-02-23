import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

   res.render(`pages/page`, {
       menu: createMenuObject('todos'),
       banner: {
           titulo: 'Todos os Animais',
           imagemDeFundo: 'allanimals.jpg',
           
       },
       list
   });

}

export const caes = (req: Request, res: Response) => {
    let list = Pet.getFromType("caes");

    res.render(`pages/page`, {
        menu: createMenuObject('caes'),
        banner: {
            titulo: 'Cachorros',
            imagemDeFundo: 'banner_dog.jpg'
        },
        list
    });
 }
 export const gatos = (req: Request, res: Response) => {
    let list = Pet.getFromType("gatos");
    res.render(`pages/page`, {
        menu: createMenuObject('gatos'),
        banner: {
            titulo: 'Gatos',
            imagemDeFundo: 'banner_cat.jpg'
        },
        list
    });
 
 }
 export const peixes = (req: Request, res: Response) => {
    let list = Pet.getFromType("peixes");
    res.render(`pages/page`, {
        menu: createMenuObject('peixes'),
        banner: {
            titulo: 'Peixes',
            imagemDeFundo: 'banner_fish.jpg'
        },
        list
    });
 
 }