// global.d.ts

declare type INoteColor = "#C9AAF0" | "#FFDBA1" | "#B7E0F6" | "#A3FF94";
declare type ICategory =
  | "All"
  | "Work"
  | "Personal"
  | "Fitness"
  | "Budget"
  | "School";

declare interface IDisplayCard {
  title: string;
  createdAt: Date;
  text: string;
  icon?: string;
  noteColor?: INoteColor;
}

declare interface INote extends IDisplayCard {
  category: ICategory;
  id: string | number[];
}
