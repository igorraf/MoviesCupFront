import { Observable, of } from 'rxjs';
import { MessageService } from './messages/message.service';


export class BaseService {
    constructor(protected messageService: MessageService) {
    }


    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            if (error && error.error && error.error.Msg) {
                this.error(`Atenção: ${error.error.Msg}`);
            } else if (error && error.error) {
                this.error(`Atenção: ${error.error}`);
            } else {
                this.error(`${operation} failed: ${error}`);
            }

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    public error(message: string) {
        this.messageService.add(message);
    }

    public log(message: string) {
        this.messageService.add(`Msg Service: ${message}`);
    }
}
