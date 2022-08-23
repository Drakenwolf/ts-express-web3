import { baseRepo } from "../../Repo/repo";
import { exampleEntitie } from "./index";

// now, we have all code implementation from BaseRepository
export class exampleEntitieRepository extends baseRepo<exampleEntitie> {
  countOfExamples(): Promise<number> {
    return this._collection.count({});
  }
}
