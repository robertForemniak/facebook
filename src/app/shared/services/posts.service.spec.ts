import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import { IPostList } from '../interfaces/post-list.interface';

describe('PostsService', () => {
    let service: PostsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        service = TestBed.get(PostsService);
        httpMock = TestBed.get(HttpTestingController);
        console.log('beforeEach()')
    });

    it('should be created', () => {
        const service: PostsService = TestBed.get(PostsService);
        expect(service).toBeTruthy();
    });

    describe('getPosts', () => {

        it('should make HTTP request', async () => {
            //1. Zarejestrować request
            const response = service.getPosts(); //promise

            //2. Stworzyc server HTTP ktory bedzie zwracal mockowe dane
            const server = httpMock.expectOne('assets/posts.json');

            const fakePostList =[
                {id:'hjk123'},
                {id:'987sdf'},
            ] as IPostList;

            server.flush({posts: fakePostList})

            //3. Pobrac dane z odpowiedzi servera
            const posts = await response;

            //4. Sprawdzić poprawność otrzymanych danych
            expect(posts).toEqual(fakePostList);
            //5

        })

    });

});
