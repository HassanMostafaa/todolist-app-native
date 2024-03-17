// global.d.ts

declare type INoteColor = "#C9AAF0" | "#FFDBA1" | "#B7E0F6" | "#A3FF94";

declare interface IDisplayCard {
  title: string;
  createdAt: Date;
  text: string;
  icon?: string;
  noteColor: INoteColor;
}
