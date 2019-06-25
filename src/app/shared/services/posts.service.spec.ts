import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import { IPostList } from '../interfaces/post-list.interface';
import { IPostListItem } from '../interfaces/post-list-item.interface';
import { environment } from 'src/environments/environment';

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
            const server = httpMock.expectOne(environment.postsUrl);

            const fakePostList = [
                { id: 'hjk123' },
                { id: '987sdf' },
            ] as IPostList;

            server.flush({ posts: fakePostList })

            //3. Pobrac dane z odpowiedzi servera
            const posts = await response;

            //4. Sprawdzić poprawność otrzymanych danych
            expect(posts).toEqual(fakePostList);
            //5

        })

    });

    describe('getPostById', () => {

        it('should contain method "getPostById"', () => {
            expect(service.getPosts).toEqual(
                jasmine.any(Function)
            );
        });

        it('should make HTTP request"', async () => {
            //1. zarejestrowac request
            const postId = '13a77847-0d9a-51d0-8f81-86e2a70c45ba'
            const response = service.getPostById(postId); // PROMISE

            //2. Strowzyc serwer HTTP, ktory bedzie zwracal mockowe dane
            const server = httpMock.expectOne(environment.postsUrl);

            const fakePost = { id: 'aaaaaaa' } as IPostListItem;

            const fakePostList = [
                fakePost,
                { id: '1213hf' },
            ] as IPostList;

            server.flush({
                posts: fakePostList
            });

            //3. Pobrac dane z odpowiedzie z servera
            const posts = await response; //


            //4 Sprawdzic poprawnosc otrzymanych danych
            expect(posts).toEqual(fakePost);


        });

    });
});